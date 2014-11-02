jaggQuery
=========

Aggregate function extension for jQuery. Currently supports sum, avg, min and max. Silently ignores all non-numeric values.



Examples
----------------------

    <input value="abc" />
    <input value="3" />
    <input value="12" />
    
    $("input").sum() -> 15
    $("input").min() -> 3
    $("input").max() -> 12
    $("input").avg() -> 7.5


