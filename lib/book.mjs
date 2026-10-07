// The book's module (#use): what its pages declare.
//   front: a heading that takes no number (the home page's title), listed
//   in the contents without one; a reference reads its title.
//   toc: a reference form — a chapter's number and title, as the home
//   page's contents lists them.
export default function ($, { slot }) {
  $.element('front', {
    like: 'heading', select: [{ node: 'heading', role: 'front' }], numbering: 'never', sites: [],
    ref: [slot('title')],
  });
  $.element('heading', { forms: { toc: [slot('number'), ' ', slot('title')] } });
}
