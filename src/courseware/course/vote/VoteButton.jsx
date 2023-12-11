import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { IconButton } from '@edx/paragon';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const VoteButton = ({
  unitId,
  courseId
}) => {

  const handleVoteClick = useCallback(async (nameEvent) => {
    console.log('onClick', nameEvent, unitId, courseId)
  }, [unitId, courseId]);

  return (
    <div>
      <IconButton 
        key="ilike" 
        variant="success" 
        alt="Like" 
        iconAs={<FontAwesomeIcon icon="fa-solid fa-thumbs-up" />} 
        onClick={() => handleVoteClick("like")}
        className="mr-2" 
      />
      <IconButton 
        key="inlike" 
        variant="danger" 
        alt="Like" 
        iconAs={<FontAwesomeIcon icon="fa-solid fa-thumbs-down" />} 
        onClick={() => handleVoteClick("inlike")}
        className="mr-2" 
      />
    </div>
  );
};

VoteButton.propTypes = {
  unitId: PropTypes.string.isRequired,
  courseId: PropTypes.string.isRequired,
};

export default VoteButton;
