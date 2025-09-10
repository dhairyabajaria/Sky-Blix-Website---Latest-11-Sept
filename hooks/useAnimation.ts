import { useState, useEffect } from 'react';

interface UseAnimationProps {
  /** Boolean state from the parent that controls if the component should be mounted. */
  isMounted: boolean;
  /** The CSS class name for the entrance animation. */
  animationIn: string;
  /** The CSS class name for the exit animation. */
  animationOut: string;
  /** The duration of the exit animation in milliseconds. This should match the CSS animation duration. */
  unmountDelay: number;
}

/**
 * A custom hook to manage CSS animation classes and rendering for components
 * that need to animate on mount and unmount. It delays unmounting to allow
 * exit animations to complete.
 *
 * @param {UseAnimationProps} props - The properties for the animation hook.
 * @returns An object containing:
 *  - `shouldRender`: A boolean to be used for conditionally rendering the component.
 *    It remains `true` during the exit animation.
 *  - `animationClass`: The current CSS class name (`animationIn` or `animationOut`) to apply.
 */
export const useAnimation = ({
  isMounted,
  animationIn,
  animationOut,
  unmountDelay,
}: UseAnimationProps) => {
  const [shouldRender, setShouldRender] = useState(false);
  const [animationClass, setAnimationClass] = useState('');

  useEffect(() => {
    let timeoutId: number;

    if (isMounted && !shouldRender) {
      // Component wants to mount. Immediately render it and set the 'in' animation class.
      setShouldRender(true);
      setAnimationClass(animationIn);
    } else if (!isMounted && shouldRender) {
      // Component wants to unmount. Set the 'out' animation class.
      setAnimationClass(animationOut);
      
      // After the animation is finished, update state to un-render the component.
      timeoutId = window.setTimeout(() => {
        setShouldRender(false);
      }, unmountDelay);
    }

    return () => {
      // Cleanup the timer if the component unmounts or dependencies change mid-animation.
      window.clearTimeout(timeoutId);
    };
  }, [isMounted, shouldRender, animationIn, animationOut, unmountDelay]);

  return { shouldRender, animationClass };
};
