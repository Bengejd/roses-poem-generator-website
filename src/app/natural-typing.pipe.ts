import { ChangeDetectorRef, NgZone, Pipe } from '@angular/core';

@Pipe({name: 'naturalTyping', pure: false})
export class NaturalTypingPipe {
  private typed = '';
  private target = '';
  private currentIndex = -1;
  private timeoutHandle = -1;

  constructor(
    private changeDetector: ChangeDetectorRef,
    private zone: NgZone,
  ) {
  }

  transform(value: string, mintypingSpeed: number = 200): any {
    if (this.target !== value) {
      clearTimeout(this.timeoutHandle);
      this.typed = '';
      this.currentIndex = -1;
      this.target = value;
      this.typeNextCharacter(mintypingSpeed);
    }
    return this.typed;
  }

  private typeNextCharacter(mintypingSpeed: number) {
    this.currentIndex++;
    this.typed = this.target.substr(0, this.currentIndex);
    this.changeDetector.markForCheck();
    if (this.typed !== this.target) {
      const time = Math.round(Math.random() * 70) + mintypingSpeed;
      this.timeoutHandle = setTimeout(() => {
        this.zone.run(() => this.typeNextCharacter(mintypingSpeed));
      }, time);
    }
  }
}
