//
//  RWTScaryBugData.m
//  Bugs_
//
//  Created by Darryl Tharpe on 4/28/14.
//  Copyright (c) 2014 com.yourname. All rights reserved.
//

#import "RWTScaryBugData.h"

@implementation RWTScaryBugData

@synthesize title = _title;
@synthesize rating = _rating;

- (id)initWIthTitle:(NSString *)title rating:(float)rating{
    if((self = [super init])){
        self.title = title;
        self.rating = rating;
    }
    return self;
}

@end
