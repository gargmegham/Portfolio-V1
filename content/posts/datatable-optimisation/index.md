---
title: DataTable Optimisation In Vue.js
description: High loading time of datatable input, select etc. components when number of rows were greater than 50.
date: '2022-04-08'
draft: false
slug: '/blog/optimize-datatable'
tags:
  - DataTable
  - Pagination
  - Vue Virtual Scroller
  - UX/UI
  - Vue.js
  - Performance
  - Optimization
---

## Recently while working with the Vue DataTable component, and was facing problems related to performance and frequent page crashes.

# Key Problems:
1. Initial load time was very high.
2. The input data grid was responding very slowly on some data change by user.
3. The web page was crashing quite often due to memory error.

# Target To Achieve:
- Explore possible options that can be used to modify the current component or replace the current component.
- The end user experience should be improved in terms of time lag in the operations they perform on document creation/edit screen.
- Examples: adding new item, quantity change, date change, unit change etc.

## Here is what i found during my Root Cause Analysis:
- High initial load time due to a lot of nested HTML elements being rendered on the screen. (Nested upto 36 levels) (Grid could be as high as 1000 Columns * 16 Rows)
- Processing these many HTML elements was consuming a lot of chrome memory, and was shooting CPU utilisation because of the Vue reactivity handling.
- There were a lot of bad code written on that Vue component, like mutating props directly, mutating state properties directly, use of computed properties to render data in HTML while props could have been used, redundant rerendering of Vue components on computed property change.

## Solutions That I Found & Tried
- Pagination
  - Reduced average initial load time by 80% and subsequent input reactivity time by around 50%
  - This lead to smaller array that needs to be rendered by the browser
- Vue virtual scroller
  - This also reduced initial load time by 80%
  - But increased subsequent input reactivity time multifold.
  - Thus degrading the performance and experience for scrolling inside the data table.
  - This could have been useful if the table was read only, but since it contained a lot of input, select, datetime fields, this turned out to be worse than the original component.
- Made the table read only and opened the row to in dialog to edit when the user clicks the pencil icon.
  - This was the most performant as this reduced initial load time by around 85% and subsequent input reactivity time by close to 75%.
  - This removed the nested elements issue and the removed the burden of handling reactivity of computed properties in component from the chrome.
  - But this resulted in bad user experience since they had to click once to open the dialog and then once to save that row.

## New Learnings
- Vue Performance measure tool `Vue.config.performance = true`
- **Init:** Time taken in `beforeCreated` and `created` of vue lifecycle.
- **Render:** Time taken to create the instance in javascript.
- **Patch:** Time taken to render in DOM.

# Attaching Chrome Performance Profile (with 178 Items)
- Before optimisatioon [Profile-20220421T102956.json](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/e94994cd-859f-455d-9fa0-836d8a19e629/Profile-20220421T102956.json)
- After optimisation [Profile-20220421T120813.json](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/e265a86e-ddb6-40be-8ef4-d670df4f4eaf/Profile-20220421T120813.json)
    

## Research Source:
1. [https://blog.logrocket.com/rendering-large-datasets-vue-js/](https://blog.logrocket.com/rendering-large-datasets-vue-js/)
2. [https://medium.com/@brockreece/unlock-performance-tracing-in-vue-3b2c8f619cdc](https://medium.com/@brockreece/unlock-performance-tracing-in-vue-3b2c8f619cdc)
3. [https://github.com/vuejs/vue/issues/2000](https://github.com/vuejs/vue/issues/2000#issuecomment-163658945)
4. [https://www.debugbear.com/blog/devtools-performance](https://www.debugbear.com/blog/devtools-performance)
5. https://github.com/Akryum/vue-virtual-scroller
6. https://github.com/vuejs/vue/issues/6351
