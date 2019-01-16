import Foundation
import Rollbar

class RollbarInitializer: Initializer {
    static func clientToken() -> String {
        return "b72aabbf1f1e4dd8b20dfe56c454b394"
    }
    
    override func perform(with configuration: InitializerConfiguration!) {
        let config: RollbarConfiguration = RollbarConfiguration()
        Rollbar.initWithAccessToken(RollbarInitializer.clientToken(), configuration: config)
    }
}
