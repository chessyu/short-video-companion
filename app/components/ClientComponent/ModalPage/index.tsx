"use client";

import { type ElementRef, useEffect, useRef, PropsWithChildren } from "react";
import { useRouter } from "next/navigation";
import { createPortal } from "react-dom";

export function ModalPage({ children }: PropsWithChildren) {
  const router = useRouter();
  const dialogRef = useRef<ElementRef<"dialog">>(null);

  useEffect(() => {
    if (!dialogRef.current?.open) {
      dialogRef.current?.showModal();
    }
  }, []);

  function onDismiss() {
    router.back();
  }

  return createPortal(
    <div>
      <dialog ref={dialogRef} onClose={onDismiss}>
        {children}
        <button onClick={onDismiss} />
      </dialog>
    </div>,
    document.getElementById("modal-root")!
  );
}
