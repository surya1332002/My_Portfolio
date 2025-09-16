const WEBHOOK_URL =
  'https://reventure-systems.app.n8n.cloud/webhook/pd468837-d52d-440c-a04d-784823703534/chat'; // ✅ your Chat Trigger → Production URL
const BOT_NAME = 'Surya Assistant'; // ✅ your bot’s display name

// Your dark + red theme
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

const MAX_TRIES = 60; // ~15s total
const INTERVAL_MS = 250;

function appendCssOnce() {
  if (document.getElementById('n8n-chat-base-css')) return;
  const link = document.createElement('link');
  link.id = 'n8n-chat-base-css';
  link.rel = 'stylesheet';
  link.href = 'https://cdn.jsdelivr.net/npm/@n8n/chat/dist/style.css';
  document.head.appendChild(link);
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
  style.textContent = `
    .n8n-launcher, .launcher, button[aria-label="Open chat"] {
      background: ${THEME.launcherBg} !important; color: ${THEME.launcherText} !important;
    }
    .n8n-container, .container, .panel, .widget, .n8n-chat__panel {
      border-color: ${THEME.border} !important;
    }
    .n8n-header, .header, [data-testid="header"] {
      background: ${THEME.headerBg} !important; color: ${THEME.headerText} !important;
      border-bottom: 1px solid ${THEME.border} !important;
    }
    .n8n-header .title, .header .title, [data-testid="header-title"] {
      color: ${THEME.headerText} !important;
    }
    .message.agent, .bot, .message--agent, [data-sender="ai"] .bubble {
      background: ${THEME.bubbleBotBg} !important; color: ${THEME.bubbleText} !important; border: 1px solid ${THEME.border} !important;
    }
    .message.user, .self, .message--user, [data-sender="user"] .bubble {
      background: ${THEME.bubbleUserBg} !important; color: ${THEME.bubbleText} !important; border: 1px solid ${THEME.border} !important;
    }
    .bubble a { color: ${THEME.accent} !important; }
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
      startX = e.clientX;
      startY = e.clientY;
      const rect = panel.getBoundingClientRect();
      startW = rect.width;
      startH = rect.height;
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

function customize(triesLeft = MAX_TRIES) {
  const host = document.querySelector('.n8n-chat') as HTMLElement | null;
  if (!host) {
    if (triesLeft > 0) setTimeout(() => customize(triesLeft - 1), INTERVAL_MS);
    return;
  }
  const root: any = (host as any).shadowRoot || host;

  applyTheme(root);
  ensureBotName(root);

  // panel may only exist after opening; keep watching
  if (!makeResizable(root) && triesLeft > 0) {
    setTimeout(() => customize(triesLeft - 1), INTERVAL_MS);
  }

  if (!root.__n8nResizeObserver) {
    root.__n8nResizeObserver = new MutationObserver(() => {
      makeResizable(root);
      ensureBotName(root);
    });
    root.__n8nResizeObserver.observe(root, { childList: true, subtree: true });
  }
}

async function boot() {
  appendCssOnce();

  // load the widget bundle and start it
  try {
    const { createChat } = await import('https://cdn.jsdelivr.net/npm/@n8n/chat/dist/chat.bundle.es.js');
    createChat({ webhookUrl: WEBHOOK_URL });
  } catch (e) {
    // fail silently to avoid breaking the page if CDN is blocked
    console.error('n8n chat failed to load:', e);
  }

  if (document.readyState === 'complete' || document.readyState === 'interactive') {
    customize();
  } else {
    document.addEventListener('DOMContentLoaded', customize);
  }
}

boot();