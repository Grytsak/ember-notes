import Mixin from '@ember/object/mixin';

export default Mixin.create({
    bindScrolling() {
        let onScroll;

        onScroll = () => {
            return this.scrolled();
        };

        $(document).bind('touchmove', onScroll);
        $(window).bind('scroll', onScroll);
    },

    unbindScrolling() {
        $(window).unbind('scroll');
        $(document).unbind('touchmove');
    }
});
