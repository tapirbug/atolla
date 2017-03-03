#ifndef ATOLLA_SOURCE_H
#define ATOLLA_SOURCE_H

#include "atolla/primitives.h"

enum AtollaSourceState
{
    // Channel is in a state of error that it cannot recover from
    ATOLLA_SOURCE_STATE_ERROR,
    // Channel is waiting for a response from the other end or the device was
    // relent
    ATOLLA_SOURCE_STATE_WAITING,
    // Channel is open and ready for reading and writing
    ATOLLA_SOURCE_STATE_OPEN
};
typedef enum AtollaSourceState AtollaSourceState;

struct AtollaSource
{
    void* private;
};
typedef struct AtollaSource AtollaSource;

AtollaSource atolla_source_make(const char* sink_hostname, int sink_port, int frame_length_ms, int max_buffered_frames);

AtollaSourceState atolla_source_state(AtollaSource source);

/**
 * Tries to enqueue the given frame in the connected sink.
 *
 * The call might block for some time in order to wait for the device to catch
 * up displaying the previously sent frames.
 */
bool atolla_source_put(AtollaSource source, void* frame, size_t frame_len);

#endif // ATOLLA_SOURCE_H
