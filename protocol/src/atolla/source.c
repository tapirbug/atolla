#include "atolla/source.h"

#include <assert.h>

AtollaSource atolla_source_make(const char* sink_hostname, int sink_port)
{
    assert(false);
}

AtollaSourceState atolla_source_state(AtollaSource* source)
{
    assert(false);
}

/**
 * Tries to enqueue the given frame in the connected sink.
 *
 * The call might block for some time in order to wait for the device to catch
 * up displaying the previously sent frames.
 */
bool atolla_source_put(AtollaSource* source, void* frame, size_t frame_len)
{
    assert(false);
}
