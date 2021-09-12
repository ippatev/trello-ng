import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DraggableServiceService {
  constructor() {}

  getNextElement = (cursorPosition, currentElement) => {
    const currentElementCoord = currentElement.getBoundingClientRect();
    const currentElementCenter =
      currentElementCoord.y + currentElementCoord.height / 2;

    const nextElement =
      cursorPosition < currentElementCenter
        ? currentElement
        : currentElement.nextElementSibling;

    return nextElement;
  };
}
