import Foundation
import Rollbar

class RollbarInitializer {
    static func clientToken() -> String {
        return "b72aabbf1f1e4dd8b20dfe56c454b394"
    }
    
    func perform() {
        let config: RollbarConfiguration = RollbarConfiguration()
        Rollbar.initWithAccessToken(RollbarInitializer.clientToken(), configuration: config)
    }
}
