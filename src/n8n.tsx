// src/n8n.tsx
console.log('[n8n.ts] booting');

const WEBHOOK_URL =
  'https://reventure-systems.app.n8n.cloud/webhook/pd468837-d52d-440c-a04d-784823703534/chat';
const BOT_NAME = 'Surya Assistant';

// Dark + red theme (tweak if you want)
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

function appendBaseCssOnce() {
  if (document.getElementById('n8n-chat-base-css')) return;
  const link = document.createElement('link');
  link.id = 'n8n-chat-base-css';
  link.rel = 'stylesheet';
  link.href = 'https://cdn.jsdelivr.net/npm/@n8n/chat/dist/style.css';
  document.head.appendChild(link);
}

function q1(root: Document | ShadowRoot | Element, sel: string) {
  return (root as any).querySelector?.(sel) as HTMLElement | null;
}

function applyTheme(root: ShadowRoot) {
  if (root.getElementById('n8n-custom-theme')) return;
  const style = document.createElement('style');
  style.id = 'n8n-custom-theme';
  style.textContent = `
    /* launcher button */
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
    /* message bubbles */
    [data-sender="ai"] .bubble, .message--agent .bubble, .bot .bubble {
      background: ${THEME.bubbleBotBg} !important; color: ${THEME.bubbleText} !important; border: 1px solid ${THEME.border} !important;
    }
    [data-sender="user"] .bubble, .message--user .bubble, .self .bubble {
      background: ${THEME.bubbleUserBg} !important; color: ${THEME.bubbleText} !important; border: 1px solid ${THEME.border} !important;
    }
    .bubble a { color: ${THEME.accent} !important; }
    /* composer */
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
  root.appendChild(style);
}

function ensureBotName(root: ShadowRoot) {
  const title =
    q1(root, '[data-testid="header-title"]') ||
    q1(root, '.n8n-header .title') ||
    q1(root, '.header .title');
  if (title && title.textContent !== BOT_NAME) title.textContent = BOT_NAME;

  if (!(root as any).__nameObserver) {
    (root as any).__nameObserver = new MutationObserver(() => {
      const labels = root.querySelectorAll(
        '.sender, .name, .author, [data-sender="ai"] .name, [data-testid="header-title"]'
      );
      labels.forEach((el) => {
        const t = (el.textContent || '').trim();
        if (!t || /assistant|bot|ai|support/i.test(t) || t === BOT_NAME) el.textContent = BOT_NAME;
      });
    });
    (root as any).__nameObserver.observe(root, { childList: true, subtree: true, characterData: true });
  }
}

function makeResizable(root: ShadowRoot) {
  const panel =
    q1(root, '.n8n-chat__panel') ||
    q1(root, '.n8n-container') ||
    q1(root, '[role="dialog"]');
  if (!panel) return;

  panel.style.position = panel.style.position || 'relative';

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

    let sx = 0, sy = 0, sw = 0, sh = 0, drag = false;
    const onDown = (e: MouseEvent) => {
      e.preventDefault();
      drag = true;
      sx = e.clientX; sy = e.clientY;
      const r = panel.getBoundingClientRect();
      sw = r.width; sh = r.height;
      window.addEventListener('mousemove', onMove);
      window.addEventListener('mouseup', onUp);
    };
    const onMove = (e: MouseEvent) => {
      if (!drag) return;
      const w = Math.min(Math.max(sw + (e.clientX - sx), LIMITS.minW), LIMITS.maxW);
      const h = Math.min(Math.max(sh + (e.clientY - sy), LIMITS.minH), LIMITS.maxH);
      panel.style.width = w + 'px';
      panel.style.height = h + 'px';
    };
    const onUp = () => {
      drag = false;
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseup', onUp);
      const r = panel.getBoundingClientRect();
      localStorage.setItem(SIZE_KEY, JSON.stringify({ width: Math.round(r.width), height: Math.round(r.height) }));
    };
    handle.addEventListener('mousedown', onDown);
  }
}

function customize(hostEl: HTMLElement) {
  const root = (hostEl as any).shadowRoot as ShadowRoot | null;
  if (!root) return; // widget not fully mounted yet
  applyTheme(root);
  ensureBotName(root);
  makeResizable(root);

  // In case widget rebuilds its internals, watch only its shadowRoot (not the whole page)
  if (!(root as any).__reapplyObserver) {
    (root as any).__reapplyObserver = new MutationObserver(() => {
      applyTheme(root);
      ensureBotName(root);
      makeResizable(root);
    });
    (root as any).__reapplyObserver.observe(root, { childList: true, subtree: true });
  }

  console.log('[n8n.ts] customized');
}

async function boot() {
  appendBaseCssOnce();

  // Start the widget
  try {
    const { createChat } = await import('https://cdn.jsdelivr.net/npm/@n8n/chat/dist/chat.bundle.es.js');
    createChat({ webhookUrl: WEBHOOK_URL });
    console.log('[n8n.ts] widget started');
  } catch (e) {
    console.error('n8n chat failed to load:', e);
    return;
  }

  // Find the host element with a tiny retry loop (no heavy scanning)
  const start = Date.now();
  const timer = setInterval(() => {
    // n8n typically renders <n8n-chat> with a shadowRoot
    const host = document.querySelector('n8n-chat') as HTMLElement | null
              || document.querySelector('.n8n-chat') as HTMLElement | null;
    if (host && (host as any).shadowRoot) {
      clearInterval(timer);
      customize(host);
    } else if (Date.now() - start > 10000) {
      clearInterval(timer);
      console.warn('[n8n.ts] host not found (timeout)');
    }
  }, 250);
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', boot);
} else {
  boot();
}
