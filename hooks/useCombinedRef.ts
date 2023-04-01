import { useCallback } from 'react';

function useCombinedRef(...refs) {
  const combinedRef = useCallback((element) => {
    refs.forEach((ref) => {
      if (!ref) return;
      if (typeof ref === 'function') {
        ref(element);
      } else {
        ref.current = element;
      }
    });
  }, refs);
}
