import type { ComponentChildren } from 'preact';
import { X } from 'lucide-preact';

// Общая рамка диалога: заголовок, прокручиваемое тело и нижняя панель с кнопками.
export function Modal(props: { title: ComponentChildren; onClose: () => void; wide?: boolean; footer?: ComponentChildren; children: ComponentChildren }) {
  return (
    <div class="modal" onClick={props.onClose}>
      <div class={'modal-box' + (props.wide ? ' modal-wide' : '') + (props.footer ? ' has-foot' : '')} onClick={(e) => e.stopPropagation()}>
        <div class="modal-head">
          <h2>{props.title}</h2>
          <button class="icon-btn" onClick={props.onClose}><X size={24} /></button>
        </div>
        <div class="modal-body">{props.children}</div>
        {props.footer && <div class="modal-foot">{props.footer}</div>}
      </div>
    </div>
  );
}
