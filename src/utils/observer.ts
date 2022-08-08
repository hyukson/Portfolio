import { ObserverTypes } from "../interfaces/ObserverTypes";

const observer = ({options, targets, callback}: ObserverTypes) => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(callback);
  }, options);

  if (targets.length) {  
    [...targets].map(el => observer.observe(el));
  } else {
    observer.observe(targets);
  }
}

export default observer;