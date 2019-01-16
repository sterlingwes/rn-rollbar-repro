#import <Foundation/Foundation.h>

@interface InitializerConfiguration : NSObject

+ (InitializerConfiguration *)defaultConfiguration;

@end

@interface Initializer : NSObject

- (void)performWithConfiguration:(InitializerConfiguration *)configuration;
- (BOOL)shouldPerformWhenApplicationEntersForeground;

@end
