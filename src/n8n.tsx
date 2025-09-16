// src/n8n.tsx
console.log('[n8n.ts] booting…');

// 1) EDIT THESE TWO LINES
const WEBHOOK_URL =
  'https://reventure-systems.app.n8n.cloud/webhook/pd468837-d52d-440c-a04d-784823703534/chat';
const BOT_NAME = 'Surya Assistant';

// Color theme
const THEME = {
  headerBg: '#0b0b0b',
  headerText: '#ffffff',
  launcherBg: '#ef4444',
  launcherText: '#ffffff',
  bubbleBotBg: '#111827',
  bubbleUserBg: '#ef4444',
  bubbleText: '#ffffff',
  inputBg: '#0f0f0f',
  inputText: '#ffffff',
  border: '#262626',
  accent: '#ef4444',
};

const SIZE_KEY = 'n8nChat.size';
const DEFAULT_SIZE = { width: 420, height: 560 };
const LIMITS = { minW: 340, minH: 420, maxW: 720, maxH: 900 };

function appendCssOnce() {
  if (document.getElementById('n8n-chat-base-css')) return;
  const link = document.createElement('link');
  link.id = 'n8n-chat-base-css';
  link.rel = 'stylesheet';
  link.href = 'https://cdn.jsdelivr.net/npm/@n8n/chat/dist/style.css';
  document.head.appendChild(link);
}

// Try several host selectors (different versions render differently)
function getHost(): HTMLElement | null {
  return (
    document.querySelector('n8n-chat') ||
    document.querySelector('n8n-chat-widget') ||
    document.querySelector('.n8n-chat') ||
    (Array.from(document.querySelectorAll('*')) as HTMLElement[]).find(
      // fallback: any custom element with a shadowRoot that contains “Powered by n8n”
      (el) =>
        (el as any).shadowRoot &&
        ((el as any).shadowRoot!.textContent || '').toLowerCase().includes('powered by n8n')
    ) ||
    null
  ) as HTMLElement | null;
}

function selectOne(root: Document | ShadowRoot | Element, sels: string[]) {
  for (const s of sels) {
    const el = (root as any).querySelector?.(s);
    if (el) return el as HTMLElement;
  }
  return null;
}

function applyTheme(root: ShadowRoot | Document | Element) {
  if ((root as any).getElementById?.('n8n-custom-theme')) return;
  const style = document.createElement('style');
  (style as any).id = 'n8n-custom-theme';

  // Use broad selectors so it works across widget versions.
  style.textContent = `
    /* launcher */
    .n8n-launcher, .launcher, button[aria-label="Open chat"] {
      background: ${THEME.launcherBg} !important; color: ${THEME.launcherText} !important;
    }

    /* header */
    .n8n-header, .header, [data-testid="header"] {
      background: ${THEME.headerBg} !important; color: ${THEME.headerText} !important;
      border-bottom: 1px solid ${THEME.border} !important;
    }
    .n8n-header .title, .header .title, [data-testid="header-title"] {
      color: ${THEME.headerText} !important;
    }

    /* messages (agent & user) */
    [data-sender="ai"] .bubble, .message.agent .bubble, .message--agent .bubble, .bot .bubble {
      background: ${THEME.bubbleBotBg} !important; color: ${THEME.bubbleText} !important; border: 1px solid ${THEME.border} !important;
    }
    [data-sender="user"] .bubble, .message.user .bubble, .message--user .bubble, .self .bubble {
      background: ${THEME.bubbleUserBg} !important; color: ${THEME.bubbleText} !important; border: 1px solid ${THEME.border} !important;
    }
    .bubble a { color: ${THEME.accent} !important; }

    /* composer / input */
    .composer, .input, [data-testid="composer"] {
      background: ${THEME.inputBg} !important; border-top: 1px solid ${THEME.border} !important;
    }
    .composer textarea, .input textarea, [data-testid="composer"] textarea {
      color: ${THEME.inputText} !important; background: transparent !important;
    }

    /* resizer handle */
    .n8n-resizer {
      position: absolute; width: 14px; height: 14px; right: 6px; bottom: 6px;
      cursor: se-resize; border-right: 2px solid ${THEME.accent}; border-bottom: 2px solid ${THEME.accent};
      opacity: 0.9; pointer-events: auto;
    }
  `;
  (root as any).appendChild(style);
}

function ensureBotName(root: ShadowRoot | Document | Element) {
  const titleEl =
    selectOne(root, ['[data-testid="header-title"]', '.n8n-header .title', '.header .title']) || undefined;
  if (titleEl && titleEl.textContent !== BOT_NAME) titleEl.textContent = BOT_NAME;

  if (!(root as any).__n8nNameObserver) {
    (root as any).__n8nNameObserver = new MutationObserver(() => {
      const els = (root as any).querySelectorAll?.(
        '.sender, .name, .author, [data-sender="ai"] .name, [data-testid="header-title"]'
      );
      els?.forEach((el: any) => {
        const t = (el.textContent || '').trim();
        if (!t || /assistant|bot|ai|support/i.test(t) || t === BOT_NAME) el.textContent = BOT_NAME;
      });
    });
    (root as any).__n8nNameObserver.observe(root as any, { childList: true, subtree: true, characterData: true });
  }
}

function makeResizable(root: ShadowRoot | Document | Element) {
  const panel =
    selectOne(root, ['.n8n-chat__panel', '.n8n-container', '.container', '.panel', '.widget', '[role="dialog"]']) ||
    undefined;
  if (!panel) return false;

  panel.style.position = panel.style.position || 'relative';

  // restore previous size
  try {
    const saved = JSON.parse(localStorage.getItem(SIZE_KEY) || 'null');
    const w = Math.min(Math.max(saved?.width ?? DEFAULT_SIZE.width, LIMITS.minW), LIMITS.maxW);
    const h = Math.min(Math.max(saved?.height ?? DEFAULT_SIZE.height, LIMITS.minH), LIMITS.maxH);
    panel.style.width = w + 'px';
    panel.style.height = h + 'px';
  } catch {
    panel.style.width = DEFAULT_SIZE.width + 'px';
    panel.style.height = DEFAULT_SIZE.height + 'px';
  }

  if (!panel.querySelector('.n8n-resizer')) {
    const handle = document.createElement('div');
    handle.className = 'n8n-resizer';
    panel.appendChild(handle);

    let startX = 0, startY = 0, startW = 0, startH = 0, dragging = false;

    const onDown = (e: MouseEvent) => {
      e.preventDefault();
      dragging = true;
      startX = e.clientX; startY = e.clientY;
      const rect = panel.getBoundingClientRect();
      startW = rect.width; startH = rect.height;
      window.addEventListener('mousemove', onMove);
      window.addEventListener('mouseup', onUp);
    };
    const onMove = (e: MouseEvent) => {
      if (!dragging) return;
      const newW = Math.min(Math.max(startW + (e.clientX - startX), LIMITS.minW), LIMITS.maxW);
      const newH = Math.min(Math.max(startH + (e.clientY - startY), LIMITS.minH), LIMITS.maxH);
      panel.style.width = newW + 'px';
      panel.style.height = newH + 'px';
    };
    const onUp = () => {
      dragging = false;
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseup', onUp);
      const rect = panel.getBoundingClientRect();
      localStorage.setItem(SIZE_KEY, JSON.stringify({ width: Math.round(rect.width), height: Math.round(rect.height) }));
    };
    handle.addEventListener('mousedown', onDown);
  }
  return true;
}

function customizeOnce() {
  const host = getHost();
  if (!host) return false;
  const root: any = (host as any).shadowRoot || host;

  applyTheme(root);
  ensureBotName(root);
  makeResizable(root);

  // keep things consistent if widget re-renders
  if (!root.__n8nObserver) {
    root.__n8nObserver = new MutationObserver(() => {
      applyTheme(root);
      ensureBotName(root);
      makeResizable(root);
    });
    root.__n8nObserver.observe(root, { childList: true, subtree: true });
  }

  console.log('[n8n.ts] customized');
  return true;
}

async function boot() {
  appendCssOnce();

  try {
    const { createChat } = await import('https://cdn.jsdelivr.net/npm/@n8n/chat/dist/chat.bundle.es.js');
    createChat({ webhookUrl: WEBHOOK_URL });
    console.log('[n8n.ts] widget started');
  } catch (e) {
    console.error('n8n chat failed to load:', e);
  }

  // Try immediately, then keep trying until host appears
  if (!customizeOnce()) {
    const int = setInterval(() => {
      if (customizeOnce()) clearInterval(int);
    }, 250);

    // safety timeout: stop trying after 15s
    setTimeout(() => clearInterval(int), 15000);
  }

  // also watch document; when anything is added, try again (handles SPA + lazy rendering)
  const bodyObserver = new MutationObserver(() => customizeOnce());
  bodyObserver.observe(document.body, { childList: true, subtree: true });
}

boot();
