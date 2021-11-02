try {
    document;
} catch {
    throw new Error("document is not undefined");
}

import CyVideoPlayer from './cy.video.player';
export default CyVideoPlayer;