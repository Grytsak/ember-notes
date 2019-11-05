import { helper } from '@ember/component/helper';

export function truncateText(params, hash) {
    const [ value ] = params;
    const { limit } = hash;

    if (value) {
        let cleanText = value.replace(/<\/?[^>]+(>|$)/g, "");
        let text = '';

        if (cleanText != null && cleanText.length > 0) {
            text = cleanText.substr(0, limit);

            if (cleanText.length > limit) {
                text += '...';
            }
        }

        return text;
    } else {
        return params;
    }


}

export default helper(truncateText);
