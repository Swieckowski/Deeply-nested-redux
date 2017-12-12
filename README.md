# Deeply-nested-redux
My core assumption going in is that for whatever reason our API returns deeply nested JSON data. 

The biggest problems with a deeply nested state lie in code readability and time cost of making changes to state - as seen in my unwieldy updateDeepField function. And it only spirals from there once you consider the many different sorts of changes we can expect to need. For example if we want data to move up and down nested levels, we would need add and remove functions quite similar to updateDeepField for each level and used in tandem to achieve this. Of course,we could implement recursive functions that perform these actions for us as well, but the advantage in readability would questionable, and time cost would have to be greater than or equal to the current upadateDeepField function.

If having a deeply nested state is non-negotiable, then I would recommend against redux for state management. Otherwise, I would recommend restructuring our API response into a flat structure. 
Testing on my versions of chrome and safari, reading a deep reference in an object is consistently a bit costlier (at rates of 3-8%) than reading a shallow reference, both from a cache and a flat object [https://jsperf.com/deep-reference-access-time]. 

I hope this was helpful.



