import React from 'react';
import Relay from 'react-relay';
import { FormattedMessage } from 'react-intl';
import Icon from '../icon/icon';
import { DisruptionInfoButtonFragments } from '../../queries';
import config from '../../config';

class DisruptionInfoButton extends React.Component {
  static propTypes = {
    toggleDisruptionInfo: React.PropTypes.func,
    alerts: React.PropTypes.object,
  };

  render() {
    if (!config.disruption || config.disruption.showInfoButton) {
      const disruptionClass = this.props.alerts.alerts.length > 0 ? 'active' : 'inactive';
      return (
        <div
          className={`icon-holder cursor-pointer disruption-info ${disruptionClass}`}
          onClick={this.props.toggleDisruptionInfo}
        >
          <FormattedMessage id="disruptions" defaultMessage="Disruptions" />
          <Icon
            img={'icon-icon_caution'}
            className={'icon'}
          />
        </div>
      );
    }
    return null;
  }
}

export default Relay.createContainer(DisruptionInfoButton, {
  fragments: DisruptionInfoButtonFragments,
});
