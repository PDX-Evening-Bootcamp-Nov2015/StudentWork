#  A meeting is stored as tuples of integers (start_time, end_time). These integers represent the number 
#  of 30-minute blocks past 9:00am.
#
# For example:
#
# (2, 3) # meeting from 10:00 – 10:30 am
# (6, 9) # meeting from 12:00 – 1:30 pm
#
# Write a function condense_meeting_times() that takes a list of meeting time ranges and returns a list of condensed ranges.
#
# For example, given:
#
#   [(0, 1), (3, 5), (4, 8), (10, 12), (9, 10)]
#
# your function would return:
#
#   [(0, 1), (3, 8), (9, 12)]
