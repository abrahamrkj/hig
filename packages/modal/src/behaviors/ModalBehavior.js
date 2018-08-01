import React, { Component } from "react";
import PropTypes from "prop-types";

export default class ModalBehavior extends Component {
  static propTypes = {
    /**
     * Triggers when you click the close button
     */
    onCloseClick: PropTypes.func,
    /**
     * Triggers when you click the overlay behind the modal
     */
    onOverlayClick: PropTypes.func
  };

  /**
   * @param {MouseEvent} event
   */
  handleCloseClick = event => {
    const { onCloseClick } = this.props;

    if (onCloseClick) {
      onCloseClick(event);
    }
  };

  /**
   * @param {MouseEvent} event
   */
  handleOverlayClick = event => {
    const { onOverlayClick } = this.props;

    if (onOverlayClick) {
      onOverlayClick(event);
    }
  };

  render() {
    return this.props.children({
      open: this.props.open,
      handleCloseClick: this.handleCloseClick,
      handleOverlayClick: this.handleOverlayClick
    });
  }
}
