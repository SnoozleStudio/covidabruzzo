WebFontConfig = {
  google: {
    families: ['Titillium Web:200,300,400,600,700,900', 'Permanent Marker']
  },
  typekit: {
    id: 'kee0rih'
  }
};

(d => {
  const wf = d.createElement('script'),
    s = d.scripts[0];
  wf.src = '/assets/vendor/webfontloader.js';
  wf.async = true;
  s.parentNode.insertBefore(wf, s);
})(document);