import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { Icon, IconButton } from '@edx/paragon';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

const VoteButton = ({
  unitId,
  courseId
}) => {

  console.log("Log VoteButton 2")
  
  const handleVoteClick = useCallback((nameEvent) => {
    console.log('onClick', nameEvent, unitId, courseId)
  }, [unitId, courseId]);

  return (
    <div>
      <IconButton 
        size="sm"
        className="mr-2" 
        // iconAs={<FontAwesomeIcon icon={faHome} />} 
        onClick={() => handleVoteClick("like")}
        variant="primary"
        alt="I Like" 
      />
      <IconButton 
        size="sm"
        className="mr-2" 
        // iconAs={<FontAwesomeIcon icon={faHome} />} 
        onClick={() => handleVoteClick("inlike")}
        variant="primary"
        alt="I don't Like"
      />
    </div>
  );
};

VoteButton.propTypes = {
  unitId: PropTypes.string.isRequired,
  courseId: PropTypes.string.isRequired,
};

export default VoteButton;
