const middleware = require('../index');


test('index', async () => {
    const next = () => {};
console.log(middleware);
    let markup;
    const render = (markup2) => {
	console.log(markup2);
	    expect(markup2).toMatchSnapshot();
    };
    const result =  await middleware({ path: '/foo', next, render });
    return result;
});
