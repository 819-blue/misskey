import { IIcon } from './icon';
import { IIdentifier } from './identifier';

/***
 * tag (ActivityPub)
 */
export type ITag = {
	id: string;
	type: string;
	name?: string;
	value?: string;
	updated?: Date;
	icon?: IIcon;
	identifier?: IIdentifier;
};

export function extractHashtags(tags: ITag[]) {
	if (!tags) return [];

	const hashtags = tags.filter(tag => tag.type === 'Hashtag' && typeof tag.name == 'string');

	return hashtags.map(tag => {
		const m = tag.name.match(/^#(.+)/);
		return m ? m[1] : null;
	}).filter(x => x != null);
}
