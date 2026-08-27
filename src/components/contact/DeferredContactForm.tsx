import {
  lazy,
  Suspense,
  useEffect,
  useRef,
  useState,
} from "react";

const loadContactForm =
  () =>
    import(
      "./ContactForm"
    );

const ContactForm =
  lazy(loadContactForm);

/*
 * Permite precargar el formulario desde
 * otros componentes en el futuro si fuera
 * necesario (por ejemplo al hacer hover
 * sobre "Solicitar información").
 */
export function preloadContactForm() {
  void loadContactForm();
}

function DeferredContactForm() {
  const containerRef =
    useRef<HTMLDivElement | null>(
      null,
    );

  const [
    shouldLoad,
    setShouldLoad,
  ] = useState(false);

  useEffect(() => {
    const element =
      containerRef.current;

    if (
      !element ||
      shouldLoad
    ) {
      return;
    }

    /*
     * Si IntersectionObserver no estuviera
     * disponible, cargamos el formulario
     * normalmente para no bloquear la UX.
     */
    if (
      !(
        "IntersectionObserver" in
        window
      )
    ) {
      setShouldLoad(true);
      return;
    }

    const observer =
      new IntersectionObserver(
        (entries) => {
          if (
            entries.some(
              (entry) =>
                entry.isIntersecting,
            )
          ) {
            setShouldLoad(
              true,
            );

            observer.disconnect();
          }
        },
        {
          /*
           * Empezamos a descargarlo antes de
           * que sea visible para que normalmente
           * ya esté listo cuando el usuario
           * llegue al formulario.
           */
          rootMargin:
            "900px 0px",
        },
      );

    observer.observe(
      element,
    );

    return () =>
      observer.disconnect();
  }, [shouldLoad]);

  return (
    <div
      ref={containerRef}
      className="min-w-0"
    >
      {shouldLoad ? (
        <Suspense
          fallback={
            <ContactFormSkeleton />
          }
        >
          <ContactForm />
        </Suspense>
      ) : (
        <ContactFormSkeleton />
      )}
    </div>
  );
}

function ContactFormSkeleton() {
  return (
    <div
      aria-hidden="true"
      className="min-h-[690px] rounded-2xl border border-[#ded3c3] bg-white p-5 shadow-sm sm:p-6 lg:min-h-[720px] lg:rounded-[2rem] lg:p-10 lg:shadow-[0_25px_70px_rgba(66,46,30,0.10)]"
    >
      <div className="animate-pulse">
        <div className="h-3 w-32 rounded bg-[#eadfd7]" />

        <div className="mt-4 h-8 w-64 max-w-full rounded bg-[#eee5de]" />

        <div className="mt-3 h-4 w-80 max-w-full rounded bg-[#f2ebe5]" />

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:gap-5">
          {Array.from({
            length: 4,
          }).map((_, index) => (
            <div key={index}>
              <div className="mb-2 h-3 w-28 rounded bg-[#eee5de]" />

              <div className="h-12 rounded-xl bg-[#f5f0eb]" />
            </div>
          ))}
        </div>

        <div className="mt-5">
          <div className="mb-2 h-3 w-52 rounded bg-[#eee5de]" />

          <div className="h-12 rounded-xl bg-[#f5f0eb]" />
        </div>

        <div className="mt-5">
          <div className="mb-2 h-3 w-20 rounded bg-[#eee5de]" />

          <div className="h-36 rounded-xl bg-[#f5f0eb]" />
        </div>

        <div className="mt-7 flex justify-end">
          <div className="h-12 w-40 rounded-xl bg-[#eadfd7]" />
        </div>
      </div>
    </div>
  );
}

export default DeferredContactForm;
