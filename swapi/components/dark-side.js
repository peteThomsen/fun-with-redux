import React from 'react';
import classNames from 'classnames';

export default class DarkSide extends React.PureComponent {

	static propTypes = {
		sendBoba: React.PropTypes.func.isRequired,
		loading: React.PropTypes.bool.isRequired,
		target: React.PropTypes.string
	};

	render() {
		const { loading, target, sendBoba } = this.props;

		const targetCard = classNames('well target-card', {
			'target-card-selected': target !== ''
		});

		return (
			<div className="col-xs-4">
				<div className="fixed-target-card">
					<div className={targetCard}>
						<i className="fa fa-crosshairs target-card-icon" aria-hidden="true" />{' '}
						<span className="target-card-text">
							{
								target === '' ? 'No target selected' : 'Target selected:'
							}
							<br />
							{target}
						</span>
					</div>
					<button disabled={loading || target === ''} onClick={() => sendBoba(target)}
							className="btn btn-danger"
							title="Does not work for rebel scum.">
						Send Boba Fett
					</button>
				</div>
			</div>
		);
	}
}
