import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

interface AccordionItem {
  id: number;
  title: string;
  content: string;
  isOpen: boolean;
}

@Component({
  selector: 'app-tech-growth',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tech-growth.html',
  styleUrls: ['./tech-growth.scss']
})
export class TechGrowthComponent {

  accordionItems: AccordionItem[] = [
    {
      id: 1,
      title: 'The Ultimate Guide To Solve Your Problem.',
      content: 'We help businesses develop effective strategies, improve operations, and create sustainable growth plans tailored to their goals.',
      isOpen: true
    },
    {
      id: 2,
      title: 'How To Improve IT Solution Service.',
      content: 'Our financial experts provide professional guidance to improve budgeting, forecasting, and long-term financial performance.',
      isOpen: false
    },
    {
      id: 3,
      title: 'Your Business Into The Ground.',
      content:  'We support companies with innovative technology solutions that improve productivity, efficiency, and customer experience.',
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
