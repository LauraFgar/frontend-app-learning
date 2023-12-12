import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { IconButton } from '@edx/paragon';
import { ThumbUpOutline, ThumbDownOffAlt } from '@edx/paragon/icons';
import APIService from '../../../services/APIServices'

const VoteButton = ({
  unitId,
  courseId
}) => {

  useEffect(() => {
    console.log("Log VoteButton 333", unitId, courseId)
  }, [unitId, courseId]);
  
  const handleVoteClick = useCallback((nameEvent) => {
    console.log('onClick', nameEvent, unitId, courseId)
  }, [unitId, courseId]);

  const buttonsData = [
    { name: 'like', icon: ThumbUpOutline, variant: 'primary', alt: 'I Like' },
    { name: 'inlike', icon: ThumbDownOffAlt, variant: 'danger', alt: "I don't Like" }
  ];

  return (
    <div>
      {buttonsData.map((button, index) => (
        <IconButton
          key={index}
          size="sm"
          iconAs={button.icon}
          onClick={() => handleVoteClick(button.name)}
          variant={button.variant}
          alt={button.alt}
        />
      ))}
    </div>
  );
};

VoteButton.propTypes = {
  unitId: PropTypes.string.isRequired,
  courseId: PropTypes.string.isRequired,
};

export default VoteButton;
