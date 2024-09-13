import { NgOptimizedImage, isPlatformBrowser } from '@angular/common';
import { Component, ElementRef, Inject, PLATFORM_ID, ViewChild, AfterViewInit, inject} from '@angular/core';
import { RedirectButtonComponent } from '../../shared/components/redirect-button/redirect-button.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgOptimizedImage, RedirectButtonComponent],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements AfterViewInit {
  private elementRef = inject(ElementRef)
  @ViewChild('toggleBtn') toggleBtn!: ElementRef;
  @ViewChild('toggleBtnIcon') toggleBtnIcon!: ElementRef;
  @ViewChild('dropdownMenu') dropdownMenu!: ElementRef;
  urlMainLogo: string = '../../../assets/logo/logoisac.png';
  iconMenu: string = '../../../assets/menu-icon.svg';

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  lastScrollTop:number = 0

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.toggleBtn.nativeElement.addEventListener('click', (event: Event) => {
        event.stopPropagation();

        if (!this.dropdownMenu.nativeElement.classList.contains('open')) {
          this.iconMenu = '../../../assets/close-icon.svg';
        } else {
          this.iconMenu = '../../../assets/menu-icon.svg';
        }

        this.dropdownMenu.nativeElement.classList.toggle('open');
      });

      document.addEventListener('click', () => {
        this.dropdownMenu.nativeElement.classList.remove('open');
        this.iconMenu = '../../../assets/menu-icon.svg';
      });

      window.addEventListener('scroll', () => {
        console.log(scrollY)
        if(scrollY > 100) {
          this.elementRef.nativeElement.classList.add('shadow')
        } else {
          this.elementRef.nativeElement.classList.remove('shadow')
        }
        if((scrollY > this.lastScrollTop) && (screen.width > 768)) {
          this.elementRef.nativeElement.style.top = '-150px'
        } else if ((scrollY < this.lastScrollTop) && (screen.width > 768)) {
          this.elementRef.nativeElement.style.top = '0'
        }
        this.lastScrollTop = scrollY
      })
    }
  }
}
