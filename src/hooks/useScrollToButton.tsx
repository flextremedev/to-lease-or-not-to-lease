import * as React from "react";
export const useScrollToButton = () => {
  const [scrolledToButton, setScrolledToButton] = React.useState(false);
  const buttonRef = React.createRef<HTMLButtonElement>();
  React.useEffect(() => {
    setTimeout(() => {
      if (buttonRef.current && scrolledToButton) {
        buttonRef.current.scrollIntoView();
        setScrolledToButton(false);
      }
    }, 500);
  }, [scrolledToButton, buttonRef]);
  return {
    buttonRef,
    scrollToButton: () => {
      setScrolledToButton(true);
    },
  };
};
