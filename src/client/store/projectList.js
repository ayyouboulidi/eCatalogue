import Store from './store'

const store = Store();
let projects= [{name:"name text",date:"25/12/2016",user:"ayyoub"},
{name:"name text",date:"25/12/2016",user:"ayyoub"},
{name:"name text",date:"25/12/2016",user:"ayyoub"}
,{name:"name text",date:"25/12/2016",user:"ayyoub"},
{name:"name text",date:"25/12/2016",user:"ayyoub"}
,{name:"name text",date:"25/12/2016",user:"ayyoub"},
{name:"name text",date:"25/12/2016",user:"ayyoub"},
{name:"name text",date:"25/12/2016",user:"ayyoub"},
{name:"name text",date:"25/12/2016",user:"ayyoub"},
{name:"name text",date:"25/12/2016",user:"ayyoub"},
{name:"name text",date:"25/12/2016",user:"ayyoub"}];

store.getStore$().subscribe((newProjects) => {
  projects = newProjects
})

export default {
  getStore$() {
    return store.getStore$();
  },
  setProjects(newProjects) {
    store.updateStore(newProjects);
  },
  getProjects() {
    return projects
  }
}
