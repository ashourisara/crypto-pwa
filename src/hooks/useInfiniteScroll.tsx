import { useState, useRef, useCallback } from "react";

interface UseInfiniteScrollProps {
  isLoading: boolean;
  totalItems: number;
  itemsPerPage?: number;
}

export const useInfiniteScroll = ({
  isLoading,
  totalItems,
  itemsPerPage = 5,
}: UseInfiniteScrollProps) => {
  const [visibleCount, setVisibleCount] = useState(itemsPerPage);
  const observer = useRef<IntersectionObserver>(null);

  const lastElementRef = useCallback(
    (node: HTMLDivElement) => {
      if (isLoading) return;
      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && visibleCount < totalItems) {
          setVisibleCount((prev) => Math.min(prev + itemsPerPage, totalItems));
        }
      });

      if (node) observer.current.observe(node);
    },
    [isLoading, visibleCount, totalItems, itemsPerPage]
  );

  return { visibleCount, lastElementRef };
};
