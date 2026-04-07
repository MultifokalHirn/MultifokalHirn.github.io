import { error } from '@sveltejs/kit';
import { getPostsByTagSlug, getTagBySlug } from '$lib/content/posts';

export function load({ params }) {
	const tag = getTagBySlug(params.tag);

	if (!tag) {
		error(404, 'Tag not found');
	}

	return {
		tag,
		posts: getPostsByTagSlug(params.tag)
	};
}
