import React from 'react';


class SlideItem extends React.Component {

    render() {
        const { item } = this.props;
        const { id, imagePath } = item;

        return (
            <div>
                <img className="__user_modal__slide__image" id={id} src={imagePath} alt="xx" />
            </div>
        );
    }
}

export default SlideItem;