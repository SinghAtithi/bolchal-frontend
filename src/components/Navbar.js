import React from 'react';

const styles = {
      glass: {
            background: 'rgba(255, 255, 255, 0.05)',
            boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
            backdropFilter: 'blur(11.5px)',
            WebkitBackdropFilter: 'blur(11.5px)',
            borderRadius: '10px',
            border: '1px solid rgba(255, 255, 255, 0.18)',
      }
};

function Navbar() {
      return (
            <div className="navbar ">
                  <button className="btn btn-outline bg-red-900 btn-success">Success</button>
                  <button className="btn btn-info">Info</button>
                  <button className="btn btn-success">Success</button>
                  <button className="btn btn-warning">Warning</button>
                  <button className="btn btn-error">Error</button>
            </div>
      );
}

export default Navbar;
