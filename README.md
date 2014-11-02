jaggQuery
=========

Aggregate function extension for jQuery. Currently supports sum, avg, min and max. The operation is performed on the value of all objects in the collection (typically HTML input elements). Silently ignores all non-numeric values.



Examples
----------------------

    <input value="abc" />
    <input value="3" />
    <input value="12" />
    
    $("input").sum() -> 15
    $("input").min() -> 3
    $("input").max() -> 12
    $("input").avg() -> 7.5



Notes
----------------------
- Should more precise names be used?
- Would there ever be a need to perform calculations on something other than the value?
