'use strict';

window.utils = (function() {

  /**
   * The server used HATEOAS (Hypermedia as the engine of Application State. All the foreign key are an entry in the
   * links object.For example
   * {
   *   "idSession" : 791,
   *   "title" : "Si le TDD est mort, alors pratiquons une autopsie",
   *   "links" : [ {
   *      "rel" : "self",
   *      "href" : "http://localhost:8080/api/session/791"
   *    }, {
   *      "rel" : "speaker",
   *      "href" : "http://localhost:8080/api/member/1541"
   *    }, {
   *      "rel" : "speaker",
   *      "href" : "http://localhost:8080/api/member/1401"
   *   }
   * ]}
   *
   * This functions helps to extract a table with the entity needed
   */
  function getArrayFromLinks(links, key){
    return links
      .filter(function(elt){
        return elt.rel === key;
      })
      .map(function(elt){
        return elt.href;
      });
  }

  /**
   * HATEOAS return a link to access to the dependencies. For example  "http://localhost:8080/api/member/2881"
   * This function helps to extract the id. In our example 2881
   */
  function extractId(url){
    if(!url){
      return undefined;
    }
    var elements = url.split('/');
    return elements[elements.length-1];
  }

  return {
    getArrayFromLinks: getArrayFromLinks,
    extractId: extractId
  }
})();