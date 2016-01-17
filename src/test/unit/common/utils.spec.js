
describe('Common : utils', function(){

  /**
   * The server used HATEOAS (Hypermedia as the engine of Application State. All the foreign key are an entry in the
   * links object. If we have several entity of type toto, obj.links.toto return an array. Otherwise it's just an
   * object. This function test that and return always an array
   */
  describe(' function getArrayFromLinks', function(){
    var links;

    it('should return an array with our entity', function() {
        links = [
          {rel: "speaker", href: "speaker1"},
          {rel: "speaker", href: "speaker2"}
        ];
        expect(utils.getArrayFromLinks(links, 'speaker')).toEqual(['speaker1', 'speaker2']);
      });

    it('should return an empty when no entoty found', function() {
      links = [
        {rel: "speaker", href: "speaker1"},
        {rel: "speaker", href: "speaker2"}
      ];
      expect(utils.getArrayFromLinks(links, 'notknown')).toEqual([]);
    });
  });

  /**
   * HATEOAS return a link to access to the dependencies. For example  "http://localhost:8080/api/member/2881"
   * This function helps to extract the id. In our example 2881
   */
  describe(' function extractId', function(){

    it('should return 1535 when url is "http://localhost:8080/api/member/1535"', function(){
      expect(utils.extractId('http://localhost:8080/api/member/1535')).toBe('1535');
    });

    it('should return the last part of an URL so  member when url is "http://localhost:8080/api/member"', function(){
      expect(utils.extractId('http://localhost:8080/api/member')).toBe('member');
    });

    it('should return "" when url has a / like last character ("http://localhost:8080/api/member/)"', function(){
      expect(utils.extractId('http://localhost:8080/api/member/')).toBe('');
    });

    it('should return undefined when no url is done', function(){
      expect(utils.extractId()).toBeUndefined();
    });
  });
});