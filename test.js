import test from 'ava';
import PathArray from '.';

const example = require('./example.json');

test('PathArray', t => {
	const conf = PathArray.fromArray(example);
	t.truthy(conf.path('contentPresenter.inWidget.modules') instanceof Array);
});

test('PathArray#path', t => {
	const conf = PathArray.fromArray(example);
	conf.path('contentPresenter.inWidget.modules').push({ test: true });
	t.truthy(conf.path('contentPresenter.inWidget.modules.0.test'));
});
