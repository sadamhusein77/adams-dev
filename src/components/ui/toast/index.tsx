import { useEffect, useState } from "react";
import { useToastStore } from "@/stores/useToastStore";
import style from "./style.module.scss";

export default function ToastContainer() {
  const { toasts, removeToast } = useToastStore();
  const [visibleToasts, setVisibleToasts] = useState<string[]>([]);

  useEffect(() => {
    toasts.forEach((toast) => {
      if (!visibleToasts.includes(toast.id)) {
        setVisibleToasts((prev) => [...prev, toast.id]);
        setTimeout(() => {
          setVisibleToasts((prev) => prev.filter((id) => id !== toast.id));
          removeToast(toast.id);
        }, toast.duration || 3000);
      }
    });
  }, [toasts]);

  return (
    <div className={style.toastWrapper}>
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className={`
            ${style.toast}
            ${visibleToasts.includes(toast.id) ? style.toastVisible : style.toastHidden}
            ${
              toast.type === "success"
                ? style.success
                : toast.type === "error"
                ? style.error
                : style.info
            }
          `}
        >
          <div className={style.toastContent}>
            <span className={style.toastContent__message}>{toast.message}</span>
            <button
              onClick={() => removeToast(toast.id)}
              className={style.closeButton}
            >
              &times;
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
