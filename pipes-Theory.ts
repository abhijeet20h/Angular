Pipes in Angular:
- Pipes are used to transform the value into user defined format.
- Pipes are invoked in expression by using "|", and also will be using pipes only with "Interpolation" syntax.
- Example: {{property | pipes}}.
Notes: It is similar to filters in Angular JS.
- We have different pipes
    - uppercase
    - lowercase
    - slice
    - currency
    - percent
    - number
    - date: https://angular.io/api/common/DatePipe
    - json
    - async
- All the above pipes are pre-defined and if these pipes are not meet our requirement we will use custom pipes.
- All the custom pipes are typescript classes which we can create by using "@Pipe()".
- Every custom pipe class must be implemented by using "PipeTransform" interface and also it contains "Transform()" to implement the businuss logic.
- Angular CLI command is "ng g pipe <pipename>".

Assignment: 
10  => 10(Ten)
3   => 3(Three)

Convert string into complete Pascal/Camel case.

