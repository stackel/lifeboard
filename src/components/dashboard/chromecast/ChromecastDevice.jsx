import React from 'react';
import PropTypes from 'prop-types';
import IconButton from '@material-ui/core/IconButton';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import PauseIcon from '@material-ui/icons/Pause';
import VolumeOffIcon from '@material-ui/icons/VolumeOff';
import VolumeUpIcon from '@material-ui/icons/VolumeUp';

export default function ChromecastDevice({
  device, onPlayClicked, onPauseClicked, onMuteClicked, onUnmuteClicked,
}) {
  if (!device.status.status) {
    return null;
  }
  return (
    <div className="dib">
      {
        device.status.image
        && (
        <img
          className="v-mid w5 br2"
          src={device.status.image}
          alt="album art"
        />
        )
      }
      <div className="dib v-mid pl4">
        <span className="sans-serif f4 b mb1 mt2 db">
          {device.status.title}
        </span>
        <span className="sans-serif f5 dark-gray fw4">
          {device.status.subtitle}
        </span>
        <div className="mt2">
          {
         device.status.status === 'PLAYING'
          && (
            <IconButton
              onClick={() => onPauseClicked(device.id)}
              aria-label="Pause"
            >
              <PauseIcon />
            </IconButton>
          )
        }
          {
          device.status.status === 'PAUSED'
          && (
            <IconButton
              onClick={() => onPlayClicked(device.id)}
              aria-label="Play"
            >
              <PlayArrowIcon />
            </IconButton>
          )
        }
          {
          !device.status.muted
          && (
            <IconButton
              onClick={() => onMuteClicked(device.id)}
              aria-label="Mute"
            >
              <VolumeOffIcon />
            </IconButton>
          )
        }
          {
          device.status.muted
          && (
            <IconButton
              onClick={() => onUnmuteClicked(device.id)}
              aria-label="Unmute"
            >
              <VolumeUpIcon />
            </IconButton>
          )
        }
        </div>
      </div>
    </div>
  );
}

ChromecastDevice.propTypes = {
  device: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    status: PropTypes.shape({
      title: PropTypes.string,
      subtitle: PropTypes.string,
      image: PropTypes.string,
      status: PropTypes.string,
      muted: PropTypes.bool,
    }),
  }).isRequired,
  onPlayClicked: PropTypes.func.isRequired,
  onPauseClicked: PropTypes.func.isRequired,
  onMuteClicked: PropTypes.func.isRequired,
  onUnmuteClicked: PropTypes.func.isRequired,
};
