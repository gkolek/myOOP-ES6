class AccordionGroup {
  constructor(selector) {
    this.accordionGroup = document.querySelector(selector);
    this.accordionElements = this.accordionGroup.querySelectorAll('.accordion');
  }

  init(){
    this.attachEvents();
  }

  attachEvents(){
    for (var i = 0; i<this.accordionElements.length; i++) {
      var accordionElement = this.accordionElements[i];

      accordionElement.addEventListener('click', function(e) {
        var element = e.currentTarget;
        this.toggle(element);
      }.bind(this));
    }
  }

  toggle(element){
    for (var i = 0; i<this.accordionElements.length; i++) {
      var accordionElement = this.accordionElements[i];
      if (element !== accordionElement) {
        accordionElement.classList.remove('is-open');
      }
    }

    element.classList.toggle('is-open');
  }

}

const accordionGroup1 = new AccordionGroup('.accordion-group');
accordionGroup1.init();
