Forms in Angular:
- Angular supports two types of Forms   
   1. - Template Driven
        - It is suitable for development of simple forms with minimum validations.
        - In this each field is represented as a property in the component class.
        - Validations are implmented using "Html5" vaidation attributes
        - To work with this we use a Module "FormsModule" which is avaible in "@angular/forms".

        Attributes in HTML5 for validations:
            - required
            - minlength
            - pattern   :   Regular Expressions
            - maxlength
            - min
            - max etc.
        
        Validation Properties:
            - untouched: If the filed is not focused, then true else false
            - touched:If the filed is focused, then true else false
            - pristine:If the filed is not modified from the existing value then it return  true.
            - dirty: If the the filed is modified then it return true.
            - valid: If all the validations true then it will be true
            - invalid: If single validation fail it will true.
            - errors: An object of error Properties.
   2. - Model Driven/ Reactive Forms
        - These are the new forms we have from Angular 4/5. Once we have a complex form we use it.
        - In template we need not write anything w.r.to validations and everything will be written in component.
        - In this each filed is represented as a "FormControl", and group of controls are represented as "FormGroup".
        - "ReactiveFormsModule" is required and it is also avaible in '@angular/forms'.
        - All the validations are avaible in "validators"
        - validators.required, validators.minlength, validators.maxlength etc.

errfname:string;
onChange(){
    if(this.myform.controls.country.value=="India"){
        if(this.myform.controls.firstname.value==""){
            this.errfname = "It is Mandatory";
        }
    }
}



Custom Directives:
- Angular supports few built in directives and if all these directives are not meet our requirements, and we want to implment a custom behaviour of HTML tags then we use "Custom Directives".
- Every custom directive is a class whcih comes with a decorator i.e. "@Directive()".
- "HostListner" used to apply events to the custom directive.
- "ElementRef" it is used to get the reference of HTML element, where we apply the directive.
- By using Angular CLI, if we want to create use a command "ng g directive <name>"


Custom Structural Directive:
- @Directive(): Used to give some logical name for the directive,
- TemplateRef: Used to get the template.
- ViewContainerRef: It is used to add/remove the element to the DOM.



















