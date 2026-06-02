import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

interface AccordionItem {
  id: number;
  titleKey: string;
  contentKey: string;
  isOpen: boolean;
}

@Component({
  selector: 'app-tech-growth',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './tech-growth.html',
  styleUrls: ['./tech-growth.scss']
})
export class TechGrowthComponent {

  accordionItems: AccordionItem[] = [
    {
      id: 1,
      titleKey:   'GROW.ACCORDION.ITEM1.TITLE',
      contentKey: 'GROW.ACCORDION.ITEM1.CONTENT',
      isOpen: true
    },
    {
      id: 2,
      titleKey:   'GROW.ACCORDION.ITEM2.TITLE',
      contentKey: 'GROW.ACCORDION.ITEM2.CONTENT',
      isOpen: false
    },
    {
      id: 3,
      titleKey:   'GROW.ACCORDION.ITEM3.TITLE',
      contentKey: 'GROW.ACCORDION.ITEM3.CONTENT',
      isOpen: false
    }
  ];

  toggleAccordion(item: AccordionItem): void {
    this.accordionItems.forEach(i => {
      if (i.id !== item.id) i.isOpen = false;
    });
    item.isOpen = !item.isOpen;
  }
}
