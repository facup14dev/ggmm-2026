import {
  lazy,
  Suspense,
  useEffect,
  useState,
} from "react";

const DesktopPage =
  lazy(
    () =>
      import(
        "../desktop/DesktopPage"
      ),
  );

const MobilePage =
  lazy(
    () =>
      import(
        "../mobile/MobilePage"
      ),
  );

const DESKTOP_QUERY =
  "(min-width: 1024px)";

function ResponsiveExperience() {
  const [
    isDesktop,
    setIsDesktop,
  ] = useState(() => {
    if (
      typeof window ===
      "undefined"
    ) {
      return false;
    }

    return window
      .matchMedia(
        DESKTOP_QUERY,
      )
      .matches;
  });

  useEffect(() => {
    const media =
      window.matchMedia(
        DESKTOP_QUERY,
      );

    const handleChange = (
      event: MediaQueryListEvent,
    ) => {
      setIsDesktop(
        event.matches,
      );
    };

    setIsDesktop(
      media.matches,
    );

    media.addEventListener(
      "change",
      handleChange,
    );

    return () =>
      media.removeEventListener(
        "change",
        handleChange,
      );
  }, []);

  return (
    <Suspense
      fallback={
        <InitialPageFallback />
      }
    >
      {isDesktop ? (
        <DesktopPage />
      ) : (
        <MobilePage />
      )}
    </Suspense>
  );
}

function InitialPageFallback() {
  return (
    <div
      aria-hidden="true"
      className="min-h-[100svh] bg-[#f5f0e8]"
    >
      <div className="flex h-20 items-center px-6 lg:px-10">
        <img
          src="/images/ggmmLogo.webp"
          alt=""
          width={700}
          height={303}
          className="h-10 w-auto object-contain"
          decoding="async"
        />
      </div>
    </div>
  );
}

export default ResponsiveExperience;
