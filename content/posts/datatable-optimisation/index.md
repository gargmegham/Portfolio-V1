---
title: DataTable Optimisation In Vue.js
description: high loading time of datatable component when number of rows increase
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

## Recently while working with the Vue DataTable component, Our team was facing some problems.

# Key Problems:
1. Initial render time was very slow.
2. The input data grid was responding very slowly.
3. The web page was crashing quite often

# Target To Achieve
1. Explore possible options that can be used to modify the current ItemTable component or replace the current component.
2. The end user experience should be improved in terms of time lag in the operations they perform on document creation/edit screen like adding new item, quantity change, etc.

## Here is what i found during my R&D:
1. Vue Performance measure tool
    - **Init:** Time taken in `beforeCreated` and `created` of vue lifecycle.
    - **Render:** Time taken to create the instance in javascript.
    - **Patch:** Time taken to render in dom.

2. Attaching Chrome Performance Profile (with 178 Items) [Profile-20220421T102956.json](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/e94994cd-859f-455d-9fa0-836d8a19e629/Profile-20220421T102956.json)

3. There are a lot of errors on document create page, resolving them can improve performance, but it is central code and the changes required might be development heavy since the files are used in at-least 24 other places
    - undefined properties on object
    - mutation out of store

4. By adding vue virtual scroller the initial load time of invoice with 178 items was reduced from 35 seconds to 12 seconds, but there is still that lag while we change item data and scroll inside that container.

5. By making data table read only and providing the edit button to change the data the initial load time of invoice with 178 items was reduced from 35 seconds to 6 seconds, along with reduce in lag of changing item data, but this will be development and QA heavy since more code change will be required.

6. By adding browser side pagination the initial load time of invoice with 178 items was reduced from 35 seconds to 6 seconds, along with reduce in lag of changing item data, but this degrades user experience a bit.
    [Profile-20220421T120813.json](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/e265a86e-ddb6-40be-8ef4-d670df4f4eaf/Profile-20220421T120813.json)
    

## Related Blogs/Links To Read:
1. [https://blog.logrocket.com/rendering-large-datasets-vue-js/](https://blog.logrocket.com/rendering-large-datasets-vue-js/)
2. [https://medium.com/@brockreece/unlock-performance-tracing-in-vue-3b2c8f619cdc](https://medium.com/@brockreece/unlock-performance-tracing-in-vue-3b2c8f619cdc)
3. [https://github.com/vuejs/vue/issues/2000](https://github.com/vuejs/vue/issues/2000#issuecomment-163658945)
4. [https://www.debugbear.com/blog/devtools-performance](https://www.debugbear.com/blog/devtools-performance)
5. https://github.com/Akryum/vue-virtual-scroller
6. https://github.com/vuejs/vue/issues/6351
