export interface ObserverTypes {
  options: ObserverOptionTypes;
  targets: any;
  callback: (entry: IntersectionObserverEntry) => void;
}

export interface ObserverOptionTypes {
  root: Element | Document | null,
  rootMargin: string,
  threshold: number
};